function setup()
{
    canvas=createCanvas(380,300);
    video=createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nC74WU5fI/model.json',modelLoaded);
}

function draw()
{
    image(video,0,0,380,300);

    classifier.classify(video, gotResult);
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

function gotResult(error,results)
{
    if (error)
    {
        console.error(error);
    }else
    {
        console.log(results);
        document.getElementById("result_object_nme").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
