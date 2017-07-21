@extends('admin')

@section('css')
    <!-- Include Editor style. -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- include summernote css/js-->
    <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.4/summernote.css" rel="stylesheet">


@endsection

@section('content')

    <div class="row">
        <div class="col-lg-6">
            
            {!! Form::open(['action' => 'Admin\BlockController@create', 'method' => 'post']) !!}

            <div class="form-group">
                {!! Form::label('position', 'Position') !!}
                {!! Form::text('position', null, ['class' => 'form-control']) !!}

                {!! Form::label('name', 'Name') !!}
                {!! Form::text('name', null, ['class' => 'form-control']) !!}

                {!! Form::label('content', 'Content') !!}
                {!! Form::textarea('content', null, ['row' => 10]) !!}

                
            </div>

            {!! Form::submit('Submit', ['class' => 'btn btn-default']) !!}

            {!! Form::close() !!}

            
        </div>
    </div>

@endsection

@section('js')
    <!-- Include JS file. -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.4/summernote.js"></script>
    <script>
        $(function() {
            $('#content').summernote({
                minHeight: 300
            });
        })
    </script>
@endsection