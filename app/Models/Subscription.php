<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'subscriberId',
        'followeeId'
    ];

    public $timestamps = false;

    public function subscriberId()
    {
        return $this->belongsTo(User::class, 'subscriberId');
    }

    public function followeeId()
    {
        return $this->belongsTo(User::class, 'followeeId');
    }
}
