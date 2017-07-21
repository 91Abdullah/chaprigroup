@extends('admin')

@section('content')

    <div class="row">
        <div class="col-lg-6">

            <p><a href="{{ action('Admin\ArticleController@create') }}">Create article</a></p>
            
            <div class="table-responsive">
                <table class="table table-striped">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th colspan="2">Actions</th>
                    </tr>
                    @forelse ($articles as $article)
                        <tr>
                            <td>{{ $article->id }}</td>
                            <td>{{ $article->name }}</td>
                            <td><a href="{{ action('Admin\ArticleController@update') }}" class="btn btn-info">Edit</a></td>
                            <td><button class="btn btn-danger">Delete</button></td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="4">No articles found.</td>
                        </tr>
                    @endforelse
                </table>
            </div>

        </div>
    </div>

@endsection