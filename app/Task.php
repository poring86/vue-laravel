<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title', 'uuid'];

    public function task(){
        return $this->hasMany(Task::class);
    }
}
