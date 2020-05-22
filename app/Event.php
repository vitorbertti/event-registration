<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
   protected $table = 'events';

   protected $fillable = ['topic', 'place', 'number_people', 'date', 'phone', 'email'];

   public function batches()
   {
      return $this->hasMany(Batch::class, 'event', 'id');
   }

   public function socialNetworks()
   {
      return $this->hasMany(SocialNetwork::class, 'event', 'id');
   }

   public function speakers()
   {
      return $this->hasMany(Speaker::class, 'event_speakers', 'event', 'speaker');
   }

}