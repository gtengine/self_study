from django.http import  Http404
from django.shortcuts import render, get_object_or_404

from polls.models import Question

def index(request):
    lastest_question_list = Question.objects.order_by('-pub_date')[:5]
    # template = loader.get_template('polls/index.html')
    context = {'lastest_question_list': lastest_question_list}
    return render(request, 'polls/index.html', context)

def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})

def result(request, question_id):
    response = "You're looking at the result of question %s."
    return render(request, 'polls/result.html', response)

def vote(request, question_id):
    return render(request, 'polls/vote.html', question_id)