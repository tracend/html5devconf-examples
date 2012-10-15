#!/bin/bash
basedir=$(node <<EOF
    var path = require('path');
    var d = path.resolve(process.cwd(), path.dirname('$_'));
    console.log(d);
EOF
)

slide_number=-1
i=0
for slide in $(cat order.txt); do
    slides[$i]=$slide
    i=$((i+1))
done
slide_count=$(wc -l order.txt | sed 's/ .*//')

function next {
    if test $slide_number -gt $slide_count; then
        cat end.txt
    else 
        slide_number=$((slide_number+1))
    fi
    navigate
}

function prev {
    if test $slide_number -gt 0; then
        slide_number=$((slide_number-1))
    fi
    navigate
}

function navigate {
    cd $basedir/${slides[$slide_number]}
}
