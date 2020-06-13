<?php

namespace App\Http\Controllers;

use Exception;
use App\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
   public function index()
   {
      $resource = Contact::get();

      return response()->json($resource);
   }

   public function store(Request $request)
   { 
      $contact = new Contact();
      $contact->name = $request->name;
      $contact->email = $request->email;
      $contact->comment = $request->comment;

      try
      {
         $contact->save();
      }
      catch(Exception $e)
      {
         return response()->json($e, 404);
      }

      return response()->json($contact);
   }

   public function show(int $id)
   {
      $resource = Contact::where('id', $id)->get();

      if (is_null($resource)) 
      {
         return response()->json(['Error' => 'Contact not found'], 404);
      }

      return response()->json($resource);
   }

   public function destroy(int $id)
   {
      $quantity = Contact::destroy($id);

      if ($quantity === 0)
      {
         return response()->json(['Error' => 'Contact not found'], 404);
      }

      return response()->json(['Message' => 'The contact was deleted.'], 200);
   }
}

