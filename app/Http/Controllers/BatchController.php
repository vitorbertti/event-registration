<?php

namespace App\Http\Controllers;

use App\Batch;
use Exception;
use Illuminate\Http\Request;

class BatchController extends Controller
{
   public function index(int $id)
   {
      $resource = Batch::where('event', $id)->orderBy('id', 'desc')->get();

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Batch not found'], 404);
      }

      return response()->json($resource);
   }

   public function store(Request $request)
   { 
      $batch = new Batch();
      $batch->name = $request->name;
      $batch->price = $request->price;
      $batch->quantity = $request->quantity;
      $batch->event = $request->event;

      try
      {
         $batch->save();
      }
      catch(Exception $e)
      {
         return response()->json($e, 404);
      }

      return response()->json($batch);
   }

   public function show(int $id)
   {
      $resource = Batch::where('id', $id)->get();

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Batch not found'], 404);
      }

      return response()->json($resource);
   }

   public function update(int $id, Request $request)
   {
      $resource = Batch::find($id);

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Batch not found'], 404);
      }

      $resource->fill($request->all());
      $resource->save();

      return response()->json($resource);
   }

   public function destroy(int $id)
   {
      $quantity = Batch::destroy($id);

      if ($quantity === 0) 
      {
         return response()->json(['Error' => 'Batch not found'], 404);
      }

      return response()->json(['Message' => 'The batch was deleted.'], 200);
   }
}

