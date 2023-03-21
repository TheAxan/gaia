# Generated by Django 4.1.3 on 2023-03-21 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_question_parent_alter_question_prerequisite'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='type',
            field=models.CharField(choices=[('binary', 'Binary'), ('number', 'Number'), ('multiple', 'Multiple')], default='placeholder', max_length=50),
            preserve_default=False,
        ),
    ]
