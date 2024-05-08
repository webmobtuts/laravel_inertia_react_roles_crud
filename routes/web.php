<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::middleware(['auth'])->group(function() {

    Route::prefix('permissions')->group(function () {
        Route::get('/', [\App\Http\Controllers\PermissionsController::class, 'index'])->name('permissions.index');

        Route::post("/", [\App\Http\Controllers\PermissionsController::class, 'store']);

        Route::put("/{id}", [\App\Http\Controllers\PermissionsController::class, 'update']);

        Route::delete("/{id}", [\App\Http\Controllers\PermissionsController::class, 'destroy']);
    });

    Route::prefix('roles')->group(function () {
        Route::get('/', [\App\Http\Controllers\RolesController::class, 'index'])->name('roles.index');

        Route::get('/create', [\App\Http\Controllers\RolesController::class, 'create']);

        Route::get('/{id}', [\App\Http\Controllers\RolesController::class, 'edit']);

        Route::post("/", [\App\Http\Controllers\RolesController::class, 'store']);

        Route::put("/{id}", [\App\Http\Controllers\RolesController::class, 'update']);

        Route::delete("/{id}", [\App\Http\Controllers\RolesController::class, 'destroy']);
    });

});
