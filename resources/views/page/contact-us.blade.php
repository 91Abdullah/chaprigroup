@extends('layout')


@section('content')

    @component('component.page-header')

        @slot('title')
            Contact Us
        @endslot

        @slot('backLink')
            {{ url('/') }}
        @endslot

        @slot('backLinkText')
            Home
        @endslot

        @slot('imgUrl')
            @mobile
                {{ Image::url(url('storage/uploads/contact.jpg'), 360, 470, ['crop' => true]) }}
            @elsemobile
                {{ Image::url(url('storage/uploads/contact.jpg'), 1349, 749,['crop' => true]) }}
            @endmobile
        @endslot

    @endcomponent

    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            {!! Form::open(['method' => 'post', 'ContactController@postMessage']) !!}
            <div class="form-group">
                <label for="name" class="control-label">Name</label>
                {!! Form::text('name', null, ['class' => 'form-control']) !!}
            </div>
            <div class="form-group">
                <label for="email" class="control-label">E-Mail Address</label>
                {!! Form::email('email', null, ['class' => 'form-control']) !!}
            </div>

            <div class="form-group">
                <label for="phone" class="control-label">Mobile Number</label>
                {!! Form::email('phone', null, ['class' => 'form-control']) !!}
            </div>

            <div class="form-group">
                <label for="message" class="control-label">Message</label>
                {!! Form::textarea('message', null, ['class' => 'form-control']) !!}
            </div>
            {!! Form::submit('Submit', ['class' => 'button button--cta']) !!}
            {!! Form::close() !!}
            <br>
        </div>
    </div>

    @include('component.footer')

@endsection