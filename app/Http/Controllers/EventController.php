<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
   public function index()
   {
      $resource = Event::orderBy('date', 'DESC')->get();
      return response()->json($resource);
   }

   public function store(Request $request)
   {
      return response()->json(Event::create($request->all()), 201);
   }

   public function show(int $id)
   {
      $resource = Event::find($id);

      if (is_null($resource)) {
         return response()->json('', 204);
      }

      return response()->json($resource);
   }
}
