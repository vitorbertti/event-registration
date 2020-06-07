<?php

namespace App\Http\Controllers;

use Exception;
use App\SocialNetwork;
use Illuminate\Http\Request;

class SocialNetworkController extends Controller
{
   public function index()
   {
      $resource = SocialNetwork::get();
      return str_replace('\/', '/', json_encode($resource));
   }

   public function store(Request $request)
   {
      $resource = SocialNetwork::where('url', $request->url)->first();

      if (is_null($resource)) 
      {
         $social_network = new SocialNetwork();
         $social_network->name = $request->name;
         $social_network->url = $request->url;

         if($request->event)
         {
            $social_network->event = $request->event;
         }
         else if($request->speaker)
         {
            $social_network->speaker = $request->speaker;
         }

         try
         {
            $social_network->save();
         }
         catch(Exception $e)
         {
            return response()->json($e, 404);
         }

         return str_replace('\/', '/', json_encode($social_network));
      }
      
      $resource->fill($request->all());
      $resource->save();

      return response()->json($resource);
   }

   public function show(int $id)
   {
      $resource = SocialNetwork::where('event', $id)->get();

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Social network not found'], 404);
      }

      return response()->json($resource);
   }

   public function update(int $id, Request $request)
   {
      $resource = SocialNetwork::find($id);

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Social network not found'], 404);
      }

      $resource->fill($request->all());
      $resource->save();

      return response()->json($resource);
   }

   public function destroy(int $id)
   {
      $quantity = SocialNetwork::destroy($id);

      if ($quantity === 0) 
      {
         return response()->json(['Error' => 'Social network not found'], 404);
      }

      return response()->json(['Message' => 'The social network was deleted.'], 200);
   }
}