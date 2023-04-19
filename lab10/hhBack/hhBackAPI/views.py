from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

# from .models import *
from .serializers import *


# FBV - function based view
# @api_view([ 'GET'])
# def all_companies(request, pk=None):
#     if request.method == "GET":
#         companies = Company.objects.all()
#         serializer = CompanySerializer(companies, many=True)
#         return Response(serializer.data)

class AllCompanies(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


# def all_companies(request):
#     companies = Company.objects.all()
#     companies_json = [c.to_json() for c in companies]
#     return JsonResponse(companies_json, safe=False)


@api_view(['GET', 'PUT', 'DELETE'])
def company(request, company_id):
    try:
        c = Company.objects.get(id=company_id)
    except Company.DoesNotExist:
        return Response({'message': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(c)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(c, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        c.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# def company(request, company_id):
#     try:
#         c = Company.objects.get(id=company_id)
#     except Company.DoesNotExist as error:
#         return JsonResponse({'message: {error}'})
#     return JsonResponse(c.to_json())

@api_view(['GET', 'POST'])
def all_vacancies(request, vacancy_id=None):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# def all_vacancies(request):
#     vacancies = Vacancy.objects.all()
#     vacancies_json = [v.to_json() for v in vacancies]
#     return JsonResponse(vacancies_json, safe=False)

@api_view(['GET', 'PUT', 'DELETE'])
def vacancy(request, vacancy_id):
    try:
        v = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist:
        return Response({'message': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VacancySerializer(v)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancySerializer(v, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        v.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# def vacancy(request, vacancy_id):
#     try:
#         v = Vacancy.objects.get(id=vacancy_id)
#     except Vacancy.DoesNotExist as error:
#         return JsonResponse({'message: {error}'})
#     return JsonResponse(v.to_json())


@api_view([ 'GET'])
def vacancies_by_company(request, company_id):
    if request.method == "GET":
        try:
            vacancies = Vacancy.objects.filter(company_id=company_id)
        except Vacancy.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


# def vacancies_by_company(request, company_id):
#     vacancies_json = [v.to_json() for v in Vacancy.objects.all() if v.company and v.company.id == company_id]
#     return JsonResponse(vacancies_json, safe=False)

@api_view([ 'GET'])
def top_ten_vacancies(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        return Response(VacancySerializer(vacancies, many=True).data)
