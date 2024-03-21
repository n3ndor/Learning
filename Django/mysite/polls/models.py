from django.db import models

# Create your models here.

class Question(models.Model):
    """A poll question."""
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")

    def __str__(self):
        """Return a string representation of the question."""
        return self.question_text



class Choice(models.Model):
    """A choice for a question in a poll."""
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        """Return the text of the choice."""
        return self.choice_text
