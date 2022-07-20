<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    public function reset(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required | string | email | max:255',
            'password' => 'required | between:8, 255'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $response = $this->broker()->reset($this->getData($request), function ($user, $password) {
            $this->resetPassword($user, $password);
        });

        return $response == Password::PASSWORD_RESET ? $this->sendResetResponse($request, $response) : $this->sendResetFailedResponse($request, $response);
    }

    public function broker() {
        return Password::broker();
    }

    protected function getData(Request $request) {
        return $request->only('email', 'password', 'token');
    }

    protected function setUserPassword($user, $password) {
        $user->password = Hash::make($password);
    }

    protected function resetPassword($user, $password) {
        $this->setUserPassword($user, $password);

        $user->setRememberToken(Str::random(60));
        $user->save();

        event(new PasswordReset($user));
    }

    protected function sendResetResponse(Request $request, $response) {
        return response()->json(['message', 'Password reset succeeded', 'response' => $response], 200);
    }

    protected function sendResetFailedResponse(Request $request, $response) {
        return response()->json(['error', 'Password was changed', 'response' => $response], 500);
    }
}
