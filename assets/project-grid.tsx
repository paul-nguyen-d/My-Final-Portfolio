import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: "maze-search",
    title: "Maze Search Algorithms Visualisation",
    description: "Maze searching algorithms visualisation using Python and evaluation of their performances.",
    fullDescription: "Explores various tree-based search algorithms, including DFS, BFS, A*, and Dijkstra's. This project provides an interactive platform to visualize how different algorithms navigate through complex mazes, offering insights into their efficiency and performance characteristics.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "Tkinter", "Search Algorithms", "Path Planning", "Optimization"]
  },
  {
    id: "plant-disease",
    title: "Plant Disease Prediction Platform",
    description: "The Plant Disease Detection web application is an innovative and user-friendly tool designed to help gardeners, farmers, and plant enthusiasts identify and combat diseases that can affect their plants.",
    fullDescription: "Leveraging advanced machine learning techniques, this platform allows users to upload images of plant leaves and receive instant diagnoses of potential diseases. The system utilizes a fine-tuned VGG16 model trained on a comprehensive dataset of plant diseases, ensuring high accuracy in predictions.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Machine Learning", "TensorFlow", "VGG16", "Python", "Flask", "ReactJS", "Web App"]
  },
  {
    id: "energy-consumption",
    title: "World Energy Consumption Visualisation",
    description: "A D3.js-powered visualization allows users to compare global energy consumption and production from 1980 to 2012, with interactive features for viewing different energy types and observing trends over time.",
    fullDescription: "This comprehensive data visualization project offers an in-depth look at global energy trends over three decades. Users can interact with the visualization to explore energy production and consumption patterns across different countries, compare various types of energy sources, and analyze how these patterns have evolved over time. The project showcases the power of D3.js in creating rich, interactive data visualizations for complex datasets.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["JavaScript", "D3.js", "Data Visualization"]
  },
  {
    id: "chess-engine",
    title: "PvP Chess Engine",
    description: "Chess Engine, written in C# using OOP, features player-versus-player gameplay, move management, and the ability to switch between console and GUI views.",
    fullDescription: "This sophisticated chess engine demonstrates advanced object-oriented programming principles in C#. It offers a robust platform for player-versus-player matches, with a flexible architecture that allows seamless switching between console and graphical user interfaces. The engine includes comprehensive move validation, game state management, and an intuitive user experience for chess enthusiasts.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["C#", "SplashKit", "OOP", "Game Development", "Unit Test", "Design Patterns"]
  }
]

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <Button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>
          {selectedProject && (
            <div className="mt-2">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-md mb-4" />
              <p className="text-gray-700 mb-4">{selectedProject.fullDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">View Demo</Button>
                <Button>Source Code</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}