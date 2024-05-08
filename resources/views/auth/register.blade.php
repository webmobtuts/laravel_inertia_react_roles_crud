@extends('layouts.app')

@section('content')

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create Account</h2>

        @if ($errors->any())
            <div class="bg-red-400 text-red-800 rounded px-4 py-5">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" class="space-y-6" action="{{ route('register') }}">
            @csrf

            <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">{{ __('Name') }}</label>
                <input type="text" name="name" value="{{ old('name') }}" required autofocus class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>

            <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">{{ __('Email') }}</label>
                <input type="text" name="email" value="{{ old('email') }}" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>

            <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">{{ __('Password') }}</label>
                <input type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>

            <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">{{ __('Password Confirm') }}</label>
                <input type="password" name="password_confirmation" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>

                <a href="{{ route('login') }}" class="mt-8 text-sm underline">
                    {{ __('Already have account? Login') }}
                </a>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {{ __('Register') }}
                </button>
            </div>
        </form>
    </div>
@endsection
