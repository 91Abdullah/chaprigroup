@extends('admin')

@section('css')
    <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.4/summernote.css" rel="stylesheet">
@endsection

@section('content')

    <div class="row">
        <div class="col-lg-6 col-lg-offset-3">
            
            {!! Form::open(['action' => 'Admin\ArticleController@create', 'method' => 'post']) !!}

            <div class="form-group">
                {!! Form::label('name', 'Name') !!}
                {!! Form::text('name', null, ['class' => 'form-control']) !!}
            </div>

            <div class="form-group">
                {!! Form::label('content', 'Content') !!}
                {!! Form::textarea('content', null) !!}
            </div>

            {!! Form::close() !!}

        </div>
    </div>

@endsection

@section('js')
    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.4/summernote.js"></script>
    <script>
        $('#content').summernote({
            minHeight: 300
        });
    </script>
@endsection