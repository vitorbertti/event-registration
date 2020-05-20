<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Speaker extends Model
{
   protected $fillable = [
      'id', 'name', 'description', 'phone', 'email', 'social_network', 'event_speaker'
   ];

   public function socialNetworks()
   {
      return $this->hasMany(SocialNetwork::class);
   }

   public function eventSpeakers()
   {
      return $this->hasMany(EventSpeaker::class);
   }
}