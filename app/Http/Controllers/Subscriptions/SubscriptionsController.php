<?php

namespace App\Http\Controllers\Subscriptions;

use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Models\User;
use Throwable;

class SubscriptionsController extends Controller
{
    public function index(User $user)
    {
        return $user->subscriptions()->get();
    }

    public function store(Request $request, User $user)
    {
        $user->subscriptions()->create([
            'subscriberId' => $user->id,
            'followeeId' => $request->followeeId
        ]);
        return response()->json(['responseMessage' => 'Created successfully!']);
    }

    public function destroy(Request $request, User $user)
    {
        $user->subscriptions()->where('followeeId', $request->followeeId)->delete();
        return response()->json(['responseMessage' => 'Deleted successfully!']);
    }
}
