@extends('layouts.app')

@section('content')
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        @if (session('status'))
            <div>
                {{ session('status') }}
            </div>
        @endif

        @guest
            <h4 class="text-2xl">Hello, <a href="{{route('login')}}">Sign in</a> </h4>
        @endguest

        @auth
                <h4 class="text-2xl">Hello {{auth()->user()->name}}, <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();" class="underline text-blue-500">
                        Logout
                    </a>   </h4>

                <form id="frm-logout" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
        @endauth
    </div>
@endsection
