<?php

namespace App\Http\Controllers;

use App\EventSpeaker;

class EventSpeakerController extends Controller
{
   public function index()
   {
      $resource = EventSpeaker::all();
      return response()->json($resource);
   }
}