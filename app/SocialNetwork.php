<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialNetwork extends Model
{
   protected $table = 'social_networks';

   protected $fillable = ['name', 'url'];

   public function event()
   {
      return $this->belongsTo(Event::class, 'event', 'id');
   }

   public function speaker()
   {
      return $this->belongsTo(Speaker::class, 'speaker', 'id');
   }
}