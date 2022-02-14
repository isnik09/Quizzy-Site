(function() 
 {
  var allQuestions = [{
    question: "What is used to add blur in CSS?",
    options: ["display", "justify-content", "backdrop-filter", "Container"],
    answer: 2
  }, {
    question: "Which one is not associated with display property?",
    options: ["block", "inline", "flow-root", "block-inline"],
    answer: 3
  }, {
    question: "Which one is correct CSS attribute?",
    options: ["x-index", "z-index", "y-index","xy-index"],
    answer: 1
  },{
    question: "Which of the following is not CSS unit?",
    options: ["in", "em", "rem", "px"],
    answer: 0
  }, {
    question: "Which tag provides carriage return or going to the next line?",
    options: ["&ltp&gt", "&ltbr/&gt", "&lta&gt", "&lthead&gt"],
    answer: 1
  },{
    question: "Which one of the following is invalid?",
    options: ["&lth6&gt", "5rem", "&ltbr/&gt", "&ltdiv&gt &lt/div&gt"],
    answer: 0
  },{
    question: "Which attribute is used to specify whether your HTML element should be visible or not?",
    options: ["hidden", "hide", "!show", "no-show"],
    answer: 0
  },{
    question: "Which tag is used for displaying any font as a mono-spaced font?",
    options: ["&ltaa&gt", "&ltmono&gt", "&ltem&gt", "&lttt&gt"],
    answer: 3
  },{
    question: "How to give comments in HTML?",
    options: ["//comment", "#comment", "&lt!-- comment --&gt", "/* comment*/ "],
    answer: 2
  },{
    question: "How to give comment in CSS?",
    options: ["//comment", "#comment", "&lt!-- comment --&gt>", "/* comment*/ "],
    answer: 3
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();