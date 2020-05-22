<?php

namespace App\Http\Controllers;

use App\Event;
use Exception;
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
      $event = new Event();
      $event->topic = $request->topic;
      $event->place = $request->place;
      $event->number_people = $request->number_people;
      $event->date = $request->date;
      $event->phone = $request->phone;
      $event->email = $request->email;

      try
      {
         $event->save();
      }
      catch(Exception $e)
      {
         return response()->json($e, 404);
      }

      return response()->json($event);
   }

   public function show(int $id)
   {
      $resource = Event::find($id);

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Event not found'], 404);
      }

      return response()->json($resource);
   }

   public function update(int $id, Request $request)
   {
      $resource = Event::find($id);

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Event not found'], 404);
      }

      $resource->fill($request->all());
      $resource->save();

      return response()->json($resource);
   }

   public function destroy(int $id)
   {
      $quantity = Event::destroy($id);

      if ($quantity === 0) 
      {
         return response()->json(['Error' => 'Event not found'], 404);
      }

      return response()->json(['Message' => 'The event was deleted.'], 200);
   }
}
