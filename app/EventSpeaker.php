<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventSpeaker extends Model
{
   protected $fillable = [
      'id', 'speaker_id', 'event_id', 'speaker', 'event'
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