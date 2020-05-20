<?php

namespace App\Http\Controllers;

use App\Speaker;

class SpeakerController extends Controller
{
   public function index()
   {
      $resource = Speaker::all();
      return response()->json($resource);
   }
}