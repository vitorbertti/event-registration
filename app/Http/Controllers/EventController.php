<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventController extends Controller 
{
   public function index()
   {
      $resource = Event::get();
      return response()->json($resource);
   }


   public function store(Request $request)
   {
      return response()->json(Event::create($request->all()), 201);
   }
}