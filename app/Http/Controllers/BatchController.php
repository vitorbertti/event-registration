<?php

namespace App\Http\Controllers;

use App\Batch;

class BatchController extends Controller
{
   public function index()
   {
      $resource = Batch::all();
      return response()->json($resource);
   }
}

