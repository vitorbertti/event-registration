<?php

namespace App\Providers;

use App\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        $this->app['auth']->viaRequest('api', function (Request $request) {

            if (!$request->hasHeader('Authorization')) {
                return null;
            }
            $authorizationHeader = $request->header('Authorization');
            $token = str_replace('Bearer', '', $authorizationHeader);
            $authData = JWT::decode($token, env('JWT_KEY'), ['HS256']);

            // return new GenericUser(['email' => $authData]);
            return User::where('email', $authData('email'))->first();
        });
    }
}
