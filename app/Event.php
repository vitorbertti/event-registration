<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

   protected $fillable = [
      'id', 'place', 'date', 'topic', 'number_people', 'batch', 'phone', 'email', 'social_network', 'event_speaker'
   ];

   public function batchs()
   {
      return $this->hasMany(Batch::class);
   }

   public function socialNetworks()
   {
      return $this->hasMany(SocialNetwork::class);
   }

   public function eventSpeaker()
   {
      return $this->hasMany(EventSpeaker::class);
   }

}