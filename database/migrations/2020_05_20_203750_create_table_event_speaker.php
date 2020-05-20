<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableEventSpeaker extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_event_speaker', function (Blueprint $table) {
            $table->id();
            $table->integer('speaker_id');
            $table->integer('event_id');
            $table->json('speaker');
            $table->json('event');
            $table->timestamps();

            $table->foreign('speaker_id')->references('speaker')->on('id');
            $table->foreign('event_id')->references('events')->on('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_event_speaker');
    }
}
