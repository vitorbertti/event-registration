<?php

namespace App\Http\Controllers;

use App\SocialNetwork;

class SocialNetworkController extends Controller
{
   public function index()
   {
      $resource = SocialNetwork::all();
      return response()->json($resource);
   }
}