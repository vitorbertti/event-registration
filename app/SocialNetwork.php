<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialNetwork extends Model
{
   protected $fillable = [
      'id', 'name', 'url', 'event', 'speaker'
   ];

   public function events()
   {
      return $this->belongsTo(Event::class);
   }

   public function speakers()
   {
      return $this->belongsTo(Speaker::class);
   }
}