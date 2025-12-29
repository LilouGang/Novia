import torch
import torch.nn as nn
import torch.nn.functional as F

class TheCrewNetwork(nn.Module):
    def __init__(self, input_size, output_size=80): # 80 SORTIES OBLIGATOIRES
        super(TheCrewNetwork, self).__init__()
        
        self.fc1 = nn.Linear(input_size, 1024)
        self.fc2 = nn.Linear(1024, 512)
        self.fc3 = nn.Linear(512, 256)
        
        # Sortie : 0-39 = Jouer Carte, 40-79 = Communiquer Carte
        self.head = nn.Linear(256, output_size)
        
    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = F.relu(self.fc3(x))
        return self.head(x)