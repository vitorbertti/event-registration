<?php

namespace App\Http\Controllers;

use Exception;
use App\Speaker;
use Illuminate\Http\Request;

class SpeakerController extends Controller
{
   public function index()
   {
      $resource = Speaker::get();
      return response()->json($resource);
   }

   public function store(Request $request)
   {
      $speaker = new Speaker();
      $speaker->name = $request->name;
      $speaker->description = $request->description;
      $speaker->phone = $request->phone;
      $speaker->email = $request->email;

      try
      {
         $speaker->save();
      }
      catch(Exception $e)
      {
         return response()->json($e, 404);
      }

      return response()->json($speaker);
   }

   public function show(int $id)
   {
      $resource = Speaker::find($id);

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Speaker not found'], 404);
      }

      return response()->json($resource);
   }

   public function update(int $id, Request $request)
   {
      $resource = Speaker::find($id);

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Speaker not found'], 404);
      }

      $resource->fill($request->all());
      $resource->save();

      return response()->json($resource);
   }

   public function destroy(int $id)
   {
      $quantity = Speaker::destroy($id);

      if ($quantity === 0) 
      {
         return response()->json(['Error' => 'Speaker not found'], 404);
      }

      return response()->json(['Message' => 'The speaker was deleted.'], 200);
   }
}