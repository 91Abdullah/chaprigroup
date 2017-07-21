@extends('admin')

@section('content')

    <a href="{{ action('Admin\BlockController@create') }}">Create Page</a>

    <div class="table-responsive">

        <table class="table table-striped">
            <tr>
                <th>Id</th>
                <th>Position</th>
                <th>Name</th>
            </tr>
            @forelse ($blocks as $block)
                <tr>
                    <td>{{ $block->id }}</td>
                    <td>{{ $block->position }}</td>
                    <td>{{ $block->name }}</td>                  
                </tr>
            @empty
                <tr>
                    <td colspan="3">No blocks found.</td> 
                </tr>
            @endforelse
        </table>

    </div>

@endsection