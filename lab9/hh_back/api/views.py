from django.shortcuts import render
from api.models import Vacancy, Company
from django.http import JsonResponse, Http404


def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, pk):
    try:
        company = Company.objects.get(pk=pk)
    except:
        raise Http404("This company does not exist")
    return JsonResponse(company.to_json(), safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, pk):
    try:
        vacancy = Vacancy.objects.get(pk=pk)
    except:
        raise Http404("This vacancy does not exist")
    return JsonResponse(vacancy.to_json(), safe=False)

def vacancy_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def company_vacancy_list(request, pk):
    c = Company.objects.get(pk=pk)
    vacancies = Vacancy.objects.filter(company=c)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
