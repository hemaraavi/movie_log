from django.apps import AppConfig


class BaseappApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'baseApp_api'
