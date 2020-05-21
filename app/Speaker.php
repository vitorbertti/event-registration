<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Speaker extends Model
{
   protected $table = 'speakers';

   public function socialNetworks()
   {
      return $this->hasMany(SocialNetwork::class, 'speaker', 'id');
   }

   public function events()
   {
      return $this->belongsToMany(Event::class, 'event_speakers', 'speaker', 'event');
   }
}