# Generated by Django 4.1.3 on 2023-03-21 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_question_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='type',
            field=models.CharField(choices=[('binary', 'binary'), ('binary_multiple', 'binary_multiple'), ('number', 'number'), ('number_multiple', 'number_multiple'), ('multiple', 'multiple')], max_length=50),
        ),
    ]