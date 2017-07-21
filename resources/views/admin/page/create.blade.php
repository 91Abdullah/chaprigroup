@extends('admin')

@section('content')

    <div class="row">
        <div class="col-lg-6">
            
            {!! Form::open(['action' => 'Admin\PageController@create', 'method' => 'post']) !!}

            <div class="form-group">
                {!! Form::label('title', 'Title') !!}
                {!! Form::text('title', null, ['class' => 'form-control']) !!}

                {!! Form::label('slug', 'Slug') !!}
                {!! Form::text('slug', null, ['class' => 'form-control']) !!}

                {!! Form::label('route', 'Route') !!}
                {!! Form::text('route', null, ['class' => 'form-control']) !!}

                
            </div>

            {!! Form::submit('Submit', ['class' => 'btn btn-default']) !!}

            {!! Form::close() !!}

        </div>
    </div>

@endsection