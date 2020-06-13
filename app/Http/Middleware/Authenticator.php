<?php

namespace App\Http\Middleware;

use App\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;

class Authenticator
{
   public function handle(Request $request, \Closure $next)
   {
      try {
         if (!$request->hasHeader('Authorization')) {
            throw new \BadMethodCallException();
         }

         $token = str_replace('Bearer ', '', $request->header('Authorization'));

         $decodedData = JWT::decode($token, env('JWT_KEY'), array('HS256'));

         $user = User::where('email', $decodedData->email)->first();

         if (is_null($user)) {
            throw new \Exception();
         }

         return $next($request);
      } catch (\Exception $e) {
         return response()->json('Not authorized', 401);
      }
   }
}