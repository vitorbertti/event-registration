<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialNetwork extends Model
{
   protected $table = 'social_networks';

   protected $fillable = ['name', 'url', 'event', 'speaker'];

   public function events()
   {
      return $this->belongsTo(Event::class, 'event', 'id');
   }

   public function speakers()
   {
      return $this->belongsTo(Speaker::class, 'speaker', 'id');
   }
}