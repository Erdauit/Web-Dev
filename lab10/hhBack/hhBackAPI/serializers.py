from abc import ABC

from rest_framework import serializers

from .models import *


# class CompanySerializer(serializers.Serializer):
#     id = serializers.IntegerField()
#     name = serializers.CharField(max_length=20)
#     description = serializers.CharField()
#     city = serializers.CharField(max_length=10)
#     address = serializers.CharField(max_length=15)

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']


# class VacancySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Vacancy
#         fields = ['id', 'name', 'description', 'salary', 'company']

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField(default=0)
    company = CompanySerializer(required=False)

    def create(self, validated_data):
        company_data = validated_data.pop('company')
        company_serializer = CompanySerializer(data=company_data)
        company_serializer.is_valid(raise_exception=True)
        company = company_serializer.save()
        vacancy_data = Vacancy.objects.create(**validated_data)
        return vacancy_data

    def update(self, instance, validated_data):
        company_data = validated_data.pop('company')
        company_serializer = CompanySerializer(instance.company, data=company_data)
        company_serializer.is_valid(raise_exception=True)
        company = company_serializer.save()
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company = validated_data.get('company', instance.company)
        instance.save()
        return instance
