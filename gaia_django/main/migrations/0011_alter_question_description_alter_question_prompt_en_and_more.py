# Generated by Django 4.1.3 on 2023-03-08 00:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_alter_question_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='description',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='question',
            name='prompt_en',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='question',
            name='prompt_fr',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]