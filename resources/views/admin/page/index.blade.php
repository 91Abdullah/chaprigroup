@extends('admin')

@section('content')

    <a href="{{ action('Admin\PageController@create') }}">Create Page</a>

    <div class="table-responsive">

        <table class="table table-striped">
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Route</th>
            </tr>
            @forelse ($pages as $page)
                <tr>
                    <td>{{ $page->id }}</td>
                    <td>{{ $page->title }}</td>
                    <td>{{ $page->slug }}</td>
                    <td>{{ $page->route }}</td>                    
                </tr>
            @empty
                <tr>
                    <td colspan="4">No pages found.</td> 
                </tr>
            @endforelse
        </table>

    </div>

@endsection