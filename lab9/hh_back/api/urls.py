from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_detail),
    path('companies/<int:pk>/vacancies/', views.company_vacancy_list),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:pk>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.vacancy_top_ten),
]