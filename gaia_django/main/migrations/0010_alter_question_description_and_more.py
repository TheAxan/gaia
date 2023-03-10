# Generated by Django 4.1.3 on 2023-03-08 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_alter_question_prompt_hint_en_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='description',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='question',
            name='prompt_hint_en',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='prompt_hint_fr',
            field=models.TextField(blank=True),
        ),
    ]